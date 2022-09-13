import { Injectable } from '@angular/core';
import { IJob } from '../interface/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  public jobs: IJob[] = [];

  constructor() { }

  public getJobsAll() {
    return this.jobs;
  }

  public addJob(job: IJob) {
    this.jobs.push(job);
  }

  public deleteJob(job: IJob) {
    this.jobs.splice(this.jobs.indexOf(job), 1);
  }

}
