import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roundToSignificantFigures'
})
export class RoundToSignificantFiguresPipe implements PipeTransform {
    transform(value: number): number {
        if (isNaN(value) || value === 0) {
            return 0;
        }

        const orderOfMagnitude = Math.floor(Math.log10(Math.abs(value))) + 1;
        const significantFigures = 2;

        const roundedValue = Math.round(value * Math.pow(10, significantFigures - orderOfMagnitude));

        return roundedValue / Math.pow(10, significantFigures - orderOfMagnitude);
    }
}
