import { CAR } from '../mock-watch-list-car';

@Component({
  selector: 'app-watch-list-car',
  templateUrl: './watch-list-car.component.html',
  styleUrls: ['./watch-list-car.component.css']
})
export class WatchListCarComponent implements OnInit {

  car = CAR;
  constructor() { }

  ngOnInit() {
  }

}
