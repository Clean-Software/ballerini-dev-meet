import { hierarchySvg, iPhoneXOrangeSvg, iPhoneXWhiteSvg, laptopProgrammingCodeSvg, programingTerminalSvg } from "../../assets/CDN";

const imageDicionary = (selected?: boolean) =>
  ({
    PROGRAMING: programingTerminalSvg,
    LAPTOP: laptopProgrammingCodeSvg,
    INTEGRATION: hierarchySvg,
    BLOCKS_CODE_CHECKMARK: laptopProgrammingCodeSvg,
    TERMINAL: programingTerminalSvg,
    BEZIER_CURVE: laptopProgrammingCodeSvg,
    MOBILE: selected ? iPhoneXWhiteSvg : iPhoneXOrangeSvg,
  } as any);

export { imageDicionary };
