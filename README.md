This is a [Next.js] project bootstrapped with [`create-next-app`]

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach
Used NextJs for SSR and ReactJs for interface building and bootstrap to make it responsive fr different screen sizes.

1. Created 2 components:
  
  a. one is to display and manage "filters"
  
  b. one is to display "mission content" getting from API call

There is no redirection happening in application, both components are bind inside index.js file and filter action is managing from index.js file only.

When any filter applies, flow go from button click from filter component to index.js to API call and rebinding of content component without refreshing the whole page.


For performance report, please refer attached pdf file by name "SpaceX Lighthouse Report" and below is the screenshot for same

![Alt text](screenshot/SpaceXLighthouseReport.png?raw=true "Lighthouse Report")