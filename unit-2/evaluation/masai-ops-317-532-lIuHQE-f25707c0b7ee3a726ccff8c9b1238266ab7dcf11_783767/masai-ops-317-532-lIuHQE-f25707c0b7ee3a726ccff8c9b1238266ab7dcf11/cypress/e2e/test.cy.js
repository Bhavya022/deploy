import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Trillo Website Responsive layout", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("Checking display flex in the top and the structure of top part", () => {
        cy.visit(url);
        cy.get("#top div")
          .should("have.css", "display", "flex")
          .then(() => {
            acc_score += 1;
          });
        cy.get("#top>div img");
        cy.get("#top>div h3");
        cy.get("#top>div p");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 2
      it("Checking the mid section for display grid and the basic structure of mid part", () => {
        cy.visit(url);
        cy.get("#mid div")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });
        cy.get("#mid>div>div img");
        cy.get("#mid>div>div h3");
        cy.get("#mid>div>div p");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 2

      it("Checking the bottom section for display grid and the basic structure of bottom part", () => {
        cy.visit(url);
        cy.get("#bottom>div")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });

        cy.get("#bottom>div>div ul");
        cy.get("#bottom>div>div li");
        cy.get("#bottom>div>div h3");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 2

      it("Checking for the top part in column direction in mobile devices", () => {
        cy.viewport(600, 750);
        cy.get("#top div")
          .should("have.css", "flex-direction", "column")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2
      it("Checking text-align center for the headings", () => {
        cy.get("#container h1").should("have.css", "text-align", "center");
        cy.get("#container p").should("have.css", "text-align", "center");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
    }
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
