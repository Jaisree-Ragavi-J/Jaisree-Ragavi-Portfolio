import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../App";

vi.mock("framer-motion", async (importOriginal) => {
  const actual = await importOriginal<typeof import("framer-motion")>();
  return { ...actual, useInView: () => true };
});

describe("portfolio", () => {
  it("shows current resume-aligned experience without publishing a resume link", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Jaisree Ragavi J" })).toBeInTheDocument();
    expect(screen.getByText("GE Vernova — Digital Software, Automation & Controls")).toBeInTheDocument();
    const linkedInLinks = screen.getAllByRole("link", { name: "LinkedIn profile" });
    expect(linkedInLinks).toHaveLength(2);
    linkedInLinks.forEach((link) =>
      expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/jaisree-ragavi-j"),
    );
    expect(screen.queryByRole("link", { name: /download resume/i })).not.toBeInTheDocument();
  });

  it("supports keyboard dismissal of gallery images and returns focus", async () => {
    render(<App />);
    const imageButton = screen.getByRole("button", { name: "View Blockchain Paper Presentation" });

    fireEvent.click(imageButton);
    expect(await screen.findByRole("dialog", { name: "Blockchain Paper Presentation" })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(document.activeElement).toBe(imageButton);
  });

  it("switches from the default dark theme to the light theme", async () => {
    render(<App />);
    const themeButtons = screen.getAllByRole("button", { name: "Switch to light theme" });

    fireEvent.click(themeButtons[0]);
    await waitFor(() => expect(document.documentElement).not.toHaveClass("dark"));
  });
});
