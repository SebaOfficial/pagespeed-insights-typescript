# PageSpeed Insight API

Typescript library to interact with the [PageSpeed Insight API](https://developers.google.com/speed/docs/insights/v5/get-started).

## Installation

The easiest way to install pagespeed-insights-typescript is from [NPM](https://www.npmjs.com/package/pagespeed-insights-typescript).
You can run the command below from your project directory to install the library:

```bash
npm install pagespeed-insights-typescript
```

Then in your code:

```ts
import PageSpeedInsights from "pagespeed-insights-typescript";

const client = new PageSpeedInsights();
```

## Setup an API Key

```ts
const client = new PageSpeedInsights({ apiKey: "xxx" });
```

## Getting the Insights

```ts
const client = new PageSpeedInsights();
client.run("https://example.com").then(async (res) => console.log(await res.json()));
```
