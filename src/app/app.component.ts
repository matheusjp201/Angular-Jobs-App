import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IJob } from './interface/job';
import { JobService } from './service/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Job Board';
  public msg = '';
  public jobs: IJob[] = [];
  public formContent: FormGroup;

  constructor(private jobService: JobService ) {
    this.jobs = jobService.getJobsAll();
    this.formContent = this.cleanForm();
  }

  public cleanForm() {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  public addJob() {
    this.jobService.addJob ({
      title: this.formContent.value.title,
      description: this.formContent.value.description,
      img: '../assets/job-one.png'
    });
    this.msg = `You have applied for ${this.formContent.value.title}`;
    this.formContent = this.cleanForm();
  }
}
