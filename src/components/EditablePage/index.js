import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  CardTitle,
  EditingContainer,
  InputContainer,
  ButtonElement,
  ParagraphText,
} from './styledComponents'

class EditablePage extends Component {
  state = {
    editableInput: '',
    buttonText: 'Save',
    isTextBeingEdited: true,
  }

  renderEditingView = () => {
    const {editableInput, buttonText} = this.state

    const onChangingInput = event => {
      this.setState({
        editableInput: event.target.value,
      })
    }

    const onClickingButton = () => {
      this.setState({
        buttonText: 'Edit',
        isTextBeingEdited: false,
      })
    }

    return (
      <EditingContainer>
        <InputContainer
          type="search"
          value={editableInput}
          onChange={onChangingInput}
        />
        <ButtonElement type="button" onClick={onClickingButton}>
          {buttonText}
        </ButtonElement>
      </EditingContainer>
    )
  }

  renderSavedView = () => {
    const {editableInput, buttonText} = this.state

    const onClickingButton = () => {
      this.setState({
        buttonText: 'Save',
        isTextBeingEdited: true,
      })
    }

    return (
      <EditingContainer>
        <ParagraphText>{editableInput}</ParagraphText>
        <ButtonElement type="button" onClick={onClickingButton}>
          {buttonText}
        </ButtonElement>
      </EditingContainer>
    )
  }

  render() {
    const {isTextBeingEdited} = this.state
    return (
      <AppContainer>
        <CardContainer>
          <CardTitle>Editable Text Input</CardTitle>
          {isTextBeingEdited
            ? this.renderEditingView()
            : this.renderSavedView()}
        </CardContainer>
      </AppContainer>
    )
  }
}

export default EditablePage
