// IMPORT PACKAGES
import styled from 'styled-components';
import PropTypes from 'prop-types';

// IMPORT IMAGES
import loupe from '../../assets/icons/search.svg';
import loupeFilled from '../../assets/icons/search-filled.svg';

// STYLES
const FormElement = styled.form.attrs({
  role: 'search',
  action: '#',
})`
  margin: 0;
`;

const Input = styled.input.attrs({
  type: 'search',
  name: 'search',
  autoComplete: 'off',
})`
  width: 396px;
  height: 56px;
  padding: 1px 9px 1px 72px;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  box-shadow: ${(props) => props.theme.shadow};
  background:
    url(${(props) => (props.theme.themeName === 'light' ? loupe : loupeFilled)})
      29px center/20px no-repeat,
    ${(props) => props.theme.colorUiBase};
  font-family: var(--family);
  font-size: var(--textS);
  font-weight: 300;
  line-height: var(--lh);
  color: ${(props) => props.theme.inputTextColor};

  &[type='search']::-webkit-search-cancel-button {
    display: none;
    appearance: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.inputTextColor};
  }

  &:focus-visible {
    border-color: var(--color-active);
  }

  @media screen and (max-width: 475px) {
    width: 344px;
    height: 48px;
    font-size: var(--textXS);
  }
`;

// SEARCH COMPONENT
function Search({ formId, placeholder }) {
  return (
    <FormElement id={formId} noValidate>
      <Input placeholder={placeholder} form={formId} />
    </FormElement>
  );
}

export default Search;

Search.propTypes = {
  formId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: '',
};
