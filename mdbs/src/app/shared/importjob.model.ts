export class Importjob {
  public jobName: string;
  public username: string;
  public password: string;
  public conStr: string;
  public cron: string;

  constructor(jobName: string, username: string, password: string, conStr: string, cron: string) {
    this.jobName = jobName;
    this.username = username;
    this.password = password;
    this.conStr = conStr;
    this.cron = cron;
  }
}
