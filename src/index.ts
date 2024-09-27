import type Config from './types/PageSpeedInsightsConfig';

export default class PageSpeedInsights {
  private config: Config;
  private static defaultConfig = {
    baseUrl: "https://www.googleapis.com/pagespeedonline",
    version: "v5",
  };

  constructor(config?: Config) {
    this.config = { ...PageSpeedInsights.defaultConfig, ...config };
  }

  getQuery(target: string) {
    const parameters = {
      url: encodeURIComponent(target),
      key: this.config.apiKey,
    };

    let query = `${this.config.baseUrl}/${this.config.version}/runPagespeed?`;
    query += Object.entries(parameters)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    return query;
  }

  run(url: string): Promise<Response> {
    return fetch(this.getQuery(url));
  }
}
