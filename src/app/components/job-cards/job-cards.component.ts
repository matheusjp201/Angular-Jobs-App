import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css']
})
export class JobCardsComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() img: string = '';
  @Input() btn: string = 'Apply for job';

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  public deleteJob() {
    this.jobService.deleteJob({
      title: this.title,
      description: this.description,
      img: this.img
    });
  }

}
