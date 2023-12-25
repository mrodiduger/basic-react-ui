import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DataList from "../src/DataList";

describe(DataList, () => {
  const testData = [
    {
      API: "Example API",
      Description: "Example description",
      Auth: "Example auth",
      HTTPS: true,
      Cors: "Example cors",
      Link: "https://example.com",
      Category: "Example category",
    },
    // Add more test data as needed
  ];

  it("renders the table headers", () => {
    render(<DataList data={testData} />);

    expect(screen.getByText("API")).toBeInTheDocument();
    expect(screen.getByText("DESCRIPTION")).toBeInTheDocument();
    expect(screen.getByText("AUTH")).toBeInTheDocument();
    expect(screen.getByText("HTTPS")).toBeInTheDocument();
    expect(screen.getByText("CORS")).toBeInTheDocument();
    expect(screen.getByText("LINK")).toBeInTheDocument();
    expect(screen.getByText("CATEGORY")).toBeInTheDocument();
  });
});
