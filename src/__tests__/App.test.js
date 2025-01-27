import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();

    const imageOfMyself = screen.getByRole("img", { name: /picture of myself/i });
    expect(imageOfMyself).toBeInTheDocument();

    const secondLevelHeading = screen.getByRole("heading", {
        name: /about me/i,
        exact: false,
        level: 2,
    });
    const paragraph=document.querySelector("p")
    expect(paragraph).toBeInTheDocument();

    const myGithubLink = document.querySelector("a");
    expect(myGithubLink).toBeInTheDocument();
    expect(myGithubLink).toHaveAttribute("href", "https://github.com/tammywantstodev");

    const myLinkedInLink=document.querySelector("a");
    expect(myLinkedInLink).toBeInTheDocument();
    expect(myGithubLink).toHaveAttribute("href", "https://github.com/tammywantstodev");

});
