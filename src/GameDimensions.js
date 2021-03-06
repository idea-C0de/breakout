import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SceneWidth = 4;
const SceneHeight = (screenHeight / screenWidth) * SceneWidth;

const GameDimensions = {
  SceneWidth,
  SceneHeight,
  Paddle: { Width: 1, Height: 0.2, BottomOffset: 0.5, Y: SceneHeight - 0.5 },
  Brick: { Width: 0.4, Height: 0.2 },
  Ball: { Radius: 0.15 },
  ForegroundZ: 5,
}

export default GameDimensions;
