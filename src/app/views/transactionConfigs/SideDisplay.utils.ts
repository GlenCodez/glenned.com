export const AddTransactionConfig = () => {
  console.log(`Add Transaction Config`)
}

export const CamelCaseToWords = (str: string) => {
  const result = str.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  console.log(str, finalResult)
  return finalResult
}