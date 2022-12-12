import subdata from "../../submissionData.json"; // do not create this file
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  subdata.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=30`
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 1;
        });
      }); // 1
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.visit(url);
        cy.get("#restaurant-container")
          .children()
          .should("have.length", 30)
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#restaurant-container")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 0.5;
          });
      }); // 1

      it(`Check the Filter Part`, () => {
        cy.get("#filter").select("cafe");
        cy.get("#restaurant-container>div")
          .should("have.length", 6)
          .then(() => {
            acc_score += 1;
          });
          cy.get("#filter").select("fast_food");
          cy.get("#restaurant-container>div")
          .should("have.length", 7)
          .then(() => {
            acc_score += 1;
          });
      }); // 2

      it(`Add a product to favourites`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=30`
        ).as("apiRequest");
        cy.reload();
        cy.wait("@apiRequest");
        expect(JSON.parse(localStorage.getItem("favourites"))).to.eq(null);
        cy.get("#restaurant-container div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("favourites")).length).to.eq(1);
            acc_score += 1;
          }); //1
          cy.get("#restaurant-container div")
          .eq(1)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("favourites")).length).to.eq(2);
            acc_score += 0.5;
          }); //1
          cy.get("#alert").should("have.text","Restaurant Added To Favourites").then(() => acc_score += 0.5);
      }); // 2
      it(`Add same product to favourite`, () => {
        cy.get("#restaurant-container div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("favourites")).length).to.eq(2);
            acc_score += 0.5;
          });
          cy.get("#alert").should("have.text","Restaurant Already in Favourites").then(() => acc_score += 0.5)
      }); //1

      it(`Go To favourites page and check if able to show on dom`, () => {
        cy.get(".nav a").eq(1).click();
        cy.get("#fav-container")
          .children()
          .should("have.length", 2)
          .then(() => {
            acc_score += 0.5;
          });
          cy.get("#fav-total")
          .contains(2)
          .then(() => {
            acc_score += 0.5;
          });
      }); // 0.5

      it(`Check the delete part`, () => {
        cy.get("#fav-container")
          .children()
          .eq(0)
          .contains("button", "Delete")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("favourites")).length).to.eq(1);
            acc_score += 0.5;
          });
        cy.get("#fav-container")
          .children()
          .should("have.length", 1)
          .then(() => {
            acc_score += 0.5;
          });
      }); // 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
