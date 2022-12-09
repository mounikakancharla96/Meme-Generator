import {Component} from 'react'
import {
  MainContainer,
  MemeHeading,
  FormAndImageContainer,
  GenerateMeme,
  DisplayText,
  FormContainer,
  Label,
  Input,
  Select,
  Option,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    backgroundImage: '',
    fontSize: '',
    backgroundImageUrlInput: '',
    topText: '',
    bottomText: '',
    topTextInput: '',
    bottomTextInput: '',
    optionId: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  submitMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state

    this.setState({
      backgroundImage: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      fontSize,
      backgroundImageUrlInput,
      topText,
      bottomText,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    return (
      <MainContainer>
        <MemeHeading>Meme Generator</MemeHeading>
        <FormAndImageContainer>
          <GenerateMeme backgroundImage={backgroundImage} data-testid="meme">
            <DisplayText fontSize={fontSize}>{topText}</DisplayText>
            <DisplayText fontSize={fontSize}>{bottomText}</DisplayText>
          </GenerateMeme>
          <FormContainer onSubmit={this.submitMeme}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="text"
              placeholder="Enter the Image URL"
              onChange={this.onChangeImageUrl}
              id="imageUrl"
              value={backgroundImageUrlInput}
            />
            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              placeholder="I love to wake up early in the morning"
              onChange={this.onChangeTopText}
              id="topText"
              value={topTextInput}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              type="text"
              placeholder="To see the morning scenery"
              onChange={this.onChangeBottomText}
              id="bottomText"
              value={bottomTextInput}
            />
            <Label htmlFor="select">Font Size</Label>
            <Select
              id="select"
              value={optionId}
              onChange={this.onChangeOptionId}
            >
              {fontSizesOptionsList.map(eachOption => (
                <Option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </Option>
              ))}
            </Select>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
        </FormAndImageContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
