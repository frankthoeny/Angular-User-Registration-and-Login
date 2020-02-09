import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../../_services/alert.service';

@Component({ selector: 'alert-messager', templateUrl: 'alert.messager.component.html' })
export class AlertMessagerComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    public message: any;

    constructor(private alertService: AlertService) { }

    public ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }

                this.message = message;
            });
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}