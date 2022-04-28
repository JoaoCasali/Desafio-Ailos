import { User } from './../../../shared/classes/user.model';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  public user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    this.user = this.userService.searchCPF(this.route.snapshot.paramMap.get('Cpf'))
    console.log(this.cpfIsBlocked())
  }

  cpfIsBlocked(): boolean {
    if (this.user.SituacaoCPF == 'Regular') {
      return true
    } else {
      return false
    }
  }

}
