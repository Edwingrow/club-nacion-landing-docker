// app/components/Slider/ImageSlider.test.tsx

import React from "react";
import { render} from "@testing-library/react";
import ImageSlider from "./ImageSlider";

describe("ImageSlider", () => {
  test("renders without crashing", () => {
    render(<ImageSlider />);
  });
});
