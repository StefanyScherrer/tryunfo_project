import React, { Component } from 'react';
import PropTypes from 'prop-types';

const cardOptions = ['normal', 'raro', 'muito raro'];

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            id="name"
            data-testid="name-input"
            name="cardName"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
          />
        </label>
        <label htmlFor="attr1">
          First Attribute
          <input
            type="number"
            id="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2">
          Second Attribute
          <input
            type="number"
            id="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3">
          Third Attribute
          <input
            type="number"
            id="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
          />
        </label>
        <label htmlFor="rare">
          Rareness
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            { cardOptions.map((value, key) => (
              <option key={ key }>{ value }</option>
            )) }
          </select>
        </label>
        { hasTrunfo ? <h3>Você já tem um Super Trunfo em seu baralho</h3>
          : (
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                type="checkbox"
                id="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                data-testid="trunfo-input"
                name="cardTrunfo"
              />
            </label>
          )
        }
        <button
          data-testid="save-button"
          name="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
