import { render } from "@testing-library/react"
import { BellIcon } from "./BellIcon"
import HamburguerMenuIcon from "./HamburgerMenuIcon"

describe('Icons', () => {
  test('should render the BellIcon icon', () => {
    render(<BellIcon />)
  })

  test('should render the BellIcon icon', () => {
    render(<HamburguerMenuIcon />)
  })
  
})
