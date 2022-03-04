import { hierarchySvg, hierarchyWhiteSvg, iPhoneXOrangeSvg, iPhoneXWhiteSvg, laptopProgrammingCodeSvg, laptopProgrammingCodeWhiteSvg, programingTerminalSvg, programingTerminalWhiteSvg } from "../../assets/CDN";

interface ImageDictionaryProps { 
  [key: string]: string;
}

const imageDicionary = (selected?: boolean): ImageDictionaryProps => {
  if (selected) {
    return {
      PROGRAMING: programingTerminalWhiteSvg,
      LAPTOP: laptopProgrammingCodeWhiteSvg,
      INTEGRATION: hierarchyWhiteSvg,
      BLOCKS_CODE_CHECKMARK: laptopProgrammingCodeWhiteSvg,
      TERMINAL: programingTerminalWhiteSvg,
      BEZIER_CURVE: laptopProgrammingCodeWhiteSvg,
      MOBILE: iPhoneXWhiteSvg,
    };
  }

  return {
    PROGRAMING: programingTerminalSvg,
    LAPTOP: laptopProgrammingCodeSvg,
    INTEGRATION: hierarchySvg,
    BLOCKS_CODE_CHECKMARK: laptopProgrammingCodeSvg,
    TERMINAL: programingTerminalSvg,
    BEZIER_CURVE: laptopProgrammingCodeSvg,
    MOBILE: iPhoneXOrangeSvg,
  };
};

export { imageDicionary };
