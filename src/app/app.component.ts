import { Component, forwardRef } from '@angular/core';
import {
  OnApprove,
  OnApproveActions,
  OnApproveData,
  OnCancelData,
  OnErrorData,
  OrderRequest,
  PayPalProcessor
} from '@wizdm/paypal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: PayPalProcessor, useExisting: forwardRef(() => AppComponent) }
  ]
})
export class AppComponent implements OnApprove {
  title = 'Paypal';

  width = 220;
  height = 35;
  shape: any = 'rect';
  color: any = 'gold';
  label: any = 'paypal';
  layout: any = 'vertical';

  public order: OrderRequest = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: '9.99'
        },
        items: []
      }
    ]
  };

  // Implements the onApprove hook
  onApprove(data: OnApproveData, actions: OnApproveActions) {
    console.log('Transaction Approved:', data);

    // Captures the trasnaction
    return actions.order.capture().then(details => {
      console.log('Transaction completed by', details);

      // Call your server to handle the transaction
      return Promise.reject('Transaction aborted by the server');
    });
  }
  onCancel(data: OnCancelData) {
    console.log('Transaction Cancelled:', data);
  }

  onError(data: OnErrorData) {
    console.log('Transaction Error:', data);
  }
}
