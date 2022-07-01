/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
export const GA_TRACKING_ID = 'UA-47027645-1'

export const gtag = {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  pageview: (url: any) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
  },
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  event: ({ action, category, label, value }: any) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}
