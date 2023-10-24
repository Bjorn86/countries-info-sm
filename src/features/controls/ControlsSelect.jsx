// IMPORT PACKAGES
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

// IMPORT HOOKS
import { useRegion } from './useRegion';

// IMPORT IMAGES
import down from '../../assets/icons/chevron-down.svg';
import downFilled from '../../assets/icons/chevron-down-filled.svg';

// OTHER IMPORTS
import { OPTIONS_LIST, KEYS } from '../../utils/constants';

// STYLES
const Wrapper = styled.div`
  height: 56px;
  z-index: 1;

  @media screen and (max-width: 475px) {
    height: 48px;
  }
`;

const Button = styled.button.attrs({
  type: 'button',
  'aria-haspopup': 'listbox',
})`
  width: 200px;
  height: 56px;
  padding: 0 0 0 24px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background:
    url(${(props) => (props.theme.themeName === 'light' ? down : downFilled)})
      calc(100% - 16px) center/15px no-repeat,
    ${(props) => props.theme.colorUiBase};
  box-shadow: ${(props) => props.theme.shadow};
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  text-align: left;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    height: 48px;
    font-size: var(--textXS);
    background-size: 13px;
  }
`;

const List = styled.ul.attrs({
  role: 'listbox',
})`
  display: ${(props) => (props.$isMenuOpen ? 'block' : 'none')};
  width: 200px;
  padding: 0;
  border-radius: 5px;
  background: ${(props) => props.theme.colorUiBase};
  list-style: none;
  margin: 5px 0 0 0;
  box-shadow: ${(props) => props.theme.shadow};
`;

const Item = styled.li.attrs({
  role: 'option',
})`
  padding: 6px 0 5px 23px;
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  user-select: none;

  &:first-child {
    padding-top: 20px;
    &:active,
    &:focus,
    &:hover,
    &[aria-selected='true'] {
      border-radius: 5px 5px 0 0;
    }
  }

  &:last-child {
    padding-bottom: 17px;
    &:active,
    &:focus,
    &:hover,
    &[aria-selected='true'] {
      border-radius: 0 0 5px 5px;
    }
  }

  &:active,
  &:focus,
  &:hover,
  &[aria-selected='true'] {
    background-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    padding-top: 5px;
    padding-left: 24px;
    font-size: var(--textXS);

    &:first-child {
      padding-top: 16px;
    }

    &:last-child {
      padding-bottom: 16px;
    }
  }
`;

// SELECT COMPONENT
function ControlsSelect() {
  // HOOKS
  const [isMenuOpen, setMenuStatus] = useState(false);
  const [region, switchOption] = useRegion();

  // VARIABLES
  const currentOption = OPTIONS_LIST.indexOf(region);

  // TOGGLE OPEN/CLOSE OPTIONS MENU
  const toggleOptionMenu = useCallback(() => {
    setMenuStatus(!isMenuOpen);
  }, [isMenuOpen]);

  // SET SELECTED OPTION AND CLOSE OPTIONS MENU
  const setOptionAndClose = useCallback(
    (index) => {
      switchOption(index, OPTIONS_LIST);
      setMenuStatus(false);
    },
    [switchOption],
  );

  // HANDLE KEY EVENTS
  const handleKeyEvents = useCallback(
    (evt) => {
      evt.preventDefault();
      switch (evt.key) {
        case KEYS.ESCAPE_KEY:
          if (isMenuOpen) {
            toggleOptionMenu();
          }
          break;
        case KEYS.ARROW_UP_KEY:
          switchOption(
            currentOption - 1 >= 0
              ? currentOption - 1
              : OPTIONS_LIST.length - 1,
            OPTIONS_LIST,
          );
          break;
        case KEYS.ARROW_DOWN_KEY:
          switchOption(
            currentOption === OPTIONS_LIST.length - 1 ? 0 : currentOption + 1,
            OPTIONS_LIST,
          );
          break;
        case KEYS.HOME_KEY:
          switchOption(0, OPTIONS_LIST);
          break;
        case KEYS.END_KEY:
          switchOption(OPTIONS_LIST.length - 1, OPTIONS_LIST);
          break;
        case KEYS.SPACE_BAR_KEY:
        case KEYS.ENTER_KEY:
          setOptionAndClose(currentOption);
          break;
        default:
          break;
      }
    },
    [
      isMenuOpen,
      setOptionAndClose,
      switchOption,
      toggleOptionMenu,
      currentOption,
    ],
  );

  return (
    <Wrapper>
      <Button
        onClick={toggleOptionMenu}
        onKeyDown={handleKeyEvents}
        aria-expanded={isMenuOpen}
      >
        {region}
      </Button>
      <List
        aria-activedescendant={region}
        aria-labelledby={region}
        tabIndex={0}
        onKeyDown={handleKeyEvents}
        $isMenuOpen={isMenuOpen}
      >
        {OPTIONS_LIST.map((option, index) => (
          <Item
            key={uuidv4()}
            id={option}
            aria-selected={currentOption === index}
            tabIndex={0}
            onKeyDown={handleKeyEvents}
            onClick={() => {
              setOptionAndClose(index);
            }}
          >
            {option}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}

export default ControlsSelect;
