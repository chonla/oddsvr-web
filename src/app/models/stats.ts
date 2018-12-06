export class Stats {
  recent: RecentDetail
  all_run_totals: StatsDetail
  recent_run_totals: StatsDetail
  this_month_run_totals: StatsDetail
}

export class StatsDetail {
  count: number
  distance: number
  elapsed_time: number
  elevation_gain: number
  moving_time: number
}

export class RecentDetail {
  title: string
  start_date: string
  utc_offset: number
  distance: number
  elapsed_time: number
}
