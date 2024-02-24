import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: 'root' })
export class NotificationService {

  constructor(private readonly toastService: ToastrService) {}

  public success(message: string) {
    this.toastService.success(message, "this.language.success");
  }

  public error(message: string) {
    this.toastService.error(message, "this.language.error");
  }

  public info(message: string) {
    this.toastService.info(message, "this.language.info");
  }

  public alert(message: string) {
    this.toastService.warning(message, "this.language.alert");
  }

  public limpar() {
    this.toastService.clear();
  }
}
