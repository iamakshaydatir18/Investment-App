
import {calculateInvestmentResults, formatter} from'../../util/investment.js'

export default function Result({userInput}){

    const result = calculateInvestmentResults(userInput);
    const initialInvestment = 
       result[0].valueEndOfYear - result[0].interest -result[0].annualInvestment;

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intrest (Year)</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(res =>
                {
                    const totalIntrest = res.valueEndOfYear - res.annualInvestment * res.year - initialInvestment;
                    const totlAmountInvested =res.valueEndOfYear -totalIntrest;
                    return <tr key={res.year}>
                        <td>{res.year}</td>
                        <td>{formatter.format(res.valueEndOfYear)}</td>
                        <td>{formatter.format(res.interest)}</td>
                        <td>{formatter.format(totalIntrest)}</td>
                        <td>{formatter.format(totlAmountInvested)}</td>
                    </tr>
                })}
        </tbody>
    </table>;
}