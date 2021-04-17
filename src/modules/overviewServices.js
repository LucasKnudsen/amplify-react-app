export const setCategory = (location) => {
  switch (location.pathname) {
    case '/us':
      return 'us'
    case '/technology':
      return 'technology'
    default:
      break;
  }
}

export const setHeader = (location) => {
  switch (location.pathname) {
    case '/us':
      return 'US Equities'
    case '/technology':
      return 'Technology'
    case '/middle-east':
      return 'Middle East'
    case '/healthcare':
      return 'Healthcare'
    case '/global':
      return 'Global'
    case '/emerging-markets':
      return 'Emerging Markets'
    case '/china':
      return 'China'
    case '/energy':
      return 'Energy'
    case '/europe':
      return 'Europe'
    default:
      break;
  }
}