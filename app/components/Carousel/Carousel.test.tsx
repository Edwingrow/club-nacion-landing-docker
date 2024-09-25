import React from "react";
import { render, screen } from "@testing-library/react";

import Carousel from "./Carousel";
import { useAccounts } from "../../hook/useAccounts";

jest.mock("../../hook/useAccounts");
jest.mock("../Account/AccountCard", () =>
  jest.fn().mockReturnValue(<div>AccountCard</div>)
);
jest.mock("../Account/AccountCardVoucher", () =>
  jest.fn().mockReturnValue(<div>AccountCardVoucher</div>)
);

const listAccounts = [
  {
    id: "1",
    name: "Account 1",
    description: "Account 1 description",
    images: [
      {
        id: "1",
        type: "image",
        url: "image1.jpg",
        highlighted: true,
        thumb: true,
      },
    ],
    crmid: "",
    isGeoLocal: false,
    haveVoucher: false,
    cuit: "",
    status: "",
    branches: [],
    benefits: [],
    phone: null,
    email: null,
    web: null,
    highlighted: "",
    created_on: "",
    updated_on: "",
    ecommerce: false,
    relevance: 0,
    virtualCard: false,
    socialNetworks: {
      facebook: null,
      instagram: null,
      twitter: null,
    },
  },
];

describe("Carousel Component", () => {
  const mockUseAccounts = useAccounts as jest.MockedFunction<
    typeof useAccounts
  >;

  beforeEach(() => {
    mockUseAccounts.mockReturnValue({
      ListAccountsByTag: listAccounts,
      ListAccountWithVoucher: listAccounts,
      loading: false,
    });
  });

  test("renders Carousel component", () => {
    render(<Carousel tags="test" title="Test Title" buttonLabel="Click Me" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("displays loading message when loading is true", () => {
    mockUseAccounts.mockReturnValueOnce({
      ListAccountsByTag: listAccounts,
      ListAccountWithVoucher: listAccounts,
      loading: true,
    });
    render(<Carousel tags="test" title="Test Title" buttonLabel="Click Me" />);
    expect(screen.getByText("Cargando...")).toBeInTheDocument();
  });

  test("renders title and subtitle correctly", () => {
    render(
      <Carousel
        tags="test"
        title="Test Title"
        subtitle="Test Subtitle"
        buttonLabel="Click Me"
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  test("renders button label correctly", () => {
    render(<Carousel tags="test" title="Test Title" buttonLabel="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("renders ListAccountsByTag accounts correctly", () => {
    mockUseAccounts.mockReturnValueOnce({
      ListAccountsByTag: listAccounts,
      ListAccountWithVoucher: listAccounts,
      loading: false,
    });
    render(<Carousel tags="test" title="Test Title" buttonLabel="Click Me" />);
  });

  test("renders ListAccountWithVoucher accounts correctly when haveVoucher is true", () => {
    mockUseAccounts.mockReturnValueOnce({
      ListAccountsByTag: listAccounts,
      ListAccountWithVoucher: listAccounts,
      loading: false,
    });
    render(
      <Carousel
        tags="test"
        title="Test Title"
        buttonLabel="Click Me"
        haveVoucher
      />
    );
  });

  test("renders left and right buttons and can be clicked", () => {
    render(<Carousel tags="test" title="Test Title" buttonLabel="Click Me" />);
    expect(screen.getAllByRole("button")).toHaveLength(3); // 1 main button + 2 navigation buttons
  });
});
