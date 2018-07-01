import { Injectable } from "@angular/core";
import { JoyrideOptions } from "../models/joyride-options.class";

export const DEFAULT_THEME_COLOR = "#3b5560";
export const THEME_COLOR = DEFAULT_THEME_COLOR;
export const STEP_DEFAULT_POSITION = "bottom";

@Injectable()
export class JoyrideOptionsService {

    private themeColor: string = THEME_COLOR;
    private stepDefaultPosition: string = STEP_DEFAULT_POSITION;
    private logsEnabled: boolean = true;
    private showCounter: boolean = true;
    private showPrevButton: boolean = true;
    private firstStepName: string = "";
    private firstStepRoute: string = "";

    setOptions(options: JoyrideOptions) {
        this.firstStepRoute = options.firstStep && options.firstStep.includes('#') ? options.firstStep.split('#')[0] : null;
        this.firstStepName = options.firstStep && options.firstStep.includes('#') ? options.firstStep.split('#')[1] : options.firstStep;
        this.stepDefaultPosition = options.stepDefaultPosition ? options.stepDefaultPosition : this.stepDefaultPosition;
        this.logsEnabled = typeof options.logsEnabled !== 'undefined' ? options.logsEnabled : this.logsEnabled;
        this.showCounter = typeof options.showCounter !== 'undefined' ? options.showCounter : this.showCounter;
        this.showPrevButton = typeof options.showPrevButton !== 'undefined' ? options.showPrevButton : this.showPrevButton;
        this.themeColor = options.themeColor ? options.themeColor : this.themeColor;
    }

    getBackdropColor() {
        return this.hexToRgb(this.themeColor);
    }

    getThemeColor() {
        return this.themeColor;
    }

    getStepDefaultPosition() {
        return this.stepDefaultPosition;
    }

    getFirstStepName() {
        return this.firstStepName;
    }

    getFirstStepRoute() {
        return this.firstStepRoute;
    }

    areLogsEnabled() {
        return this.logsEnabled;
    }

    isCounterVisible() {
        return this.showCounter;
    }

    isPrevButtonVisible() {
        return this.showPrevButton;
    }

    private hexToRgb(hex: any): string {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m: any, r: any, g: any, b: any) => {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }
}