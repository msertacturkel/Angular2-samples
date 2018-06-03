export class ImportjobModel {
  constructor(public jobName: string, public username: string, public password: string, public conStr: string, public cron: string) {
  }
}
