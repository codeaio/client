import React from "react";
import './style/article.css';

function Article() {
  return (
    <div className="Article">
      <h1 className="heading">How To</h1>
      <p className="text">
        If you are new to the codeAio then click on the register and fill the details to become our member.
        After registering, check your registered mail and verify the account(if you cannot find check your spam section).
      </p>
      <p className="text">
        Just click the link and it will be verified.
        After login, go to dashboard.
      </p>
      <p className="text">
        Now click on dashboard and proceed to your project section.
      </p>
      <p className="text">
        Create New Project.
      </p>
      <p className="text">
        Give it a name and select template.
      </p>
      <p className="text">
        Click on Go to project
      </p>
    </div>
  );
}

export default Article;
