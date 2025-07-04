import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  ChevronsUpDown,
  FileSpreadsheet,
  MessageSquare,
  MoreVertical,
} from 'lucide-react';
import { BiMessageDetail } from 'react-icons/bi';

export default function OrdersTable() {
  const orders = [
    {
      id: '#1002',
      date: '11 Feb, 2024',
      customer: 'Wade Warren',
      payment: 'Pending',
      total: '$20.00',
      delivery: 'N/A',
      items: '2 items',
      fulfillment: 'Unfulfilled',
    },
    {
      id: '#1004',
      date: '13 Feb, 2024',
      customer: 'Esther Howard',
      payment: 'Success',
      total: '$22.00',
      delivery: 'N/A',
      items: '3 items',
      fulfillment: 'Fulfilled',
    },
    {
      id: '#1007',
      date: '15 Feb, 2024',
      customer: 'Jenny Wilson',
      payment: 'Pending',
      total: '$25.00',
      delivery: 'N/A',
      items: '1 items',
      fulfillment: 'Unfulfilled',
    },
    {
      id: '#1009',
      date: '17 Feb, 2024',
      customer: 'Guy Hawkins',
      payment: 'Success',
      total: '$27.00',
      delivery: 'N/A',
      items: '5 items',
      fulfillment: 'Fulfilled',
    },
    {
      id: '#1011',
      date: '19 Feb, 2024',
      customer: 'Jacob Jones',
      payment: 'Pending',
      total: '$32.00',
      delivery: 'N/A',
      items: '4 items',
      fulfillment: 'Unfulfilled',
    },
    {
      id: '#1013',
      date: '21 Feb, 2024',
      customer: 'Kristin Watson',
      payment: 'Success',
      total: '$25.00',
      delivery: 'N/A',
      items: '3 items',
      fulfillment: 'Fulfilled',
    },
    {
      id: '#1015',
      date: '23 Feb, 2024',
      customer: 'Albert Flores',
      payment: 'Pending',
      total: '$28.00',
      delivery: 'N/A',
      items: '2 items',
      fulfillment: 'Unfulfilled',
    },
    {
      id: '#1018',
      date: '25 Feb, 2024',
      customer: 'Eleanor Pena',
      payment: 'Success',
      total: '$35.00',
      delivery: 'N/A',
      items: '1 items',
      fulfillment: 'Fulfilled',
    },
    {
      id: '#1019',
      date: '27 Feb, 2024',
      customer: 'Theresa Webb',
      payment: 'Pending',
      total: '$20.00',
      delivery: 'N/A',
      items: '2 items',
      fulfillment: 'Unfulfilled',
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input type="checkbox" />
            </TableHead>
            <TableHead>Order</TableHead>
            <TableHead className="flex items-center gap-1">
              {' '}
              <span> Date </span>
              <ChevronsUpDown className="h-4 w-4 cursor-pointer text-black/70" />
            </TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Delivery</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Fulfillment</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {order.id}
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {order.date}
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {order.customer}
              </TableCell>

              <TableCell>
                {order.payment === 'Success' ? (
                  <Badge className="border border-green-200 bg-green-100 text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>{' '}
                    Success
                  </Badge>
                ) : (
                  <Badge className="border border-yellow-200 bg-yellow-50 text-yellow-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>{' '}
                    Pending
                  </Badge>
                )}
              </TableCell>

              <TableCell className="text-sm text-gray-700">
                {order.total}
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {order.delivery}
              </TableCell>
              <TableCell className="text-sm text-gray-700">
                {order.items}
              </TableCell>

              <TableCell>
                {order.fulfillment === 'Fulfilled' ? (
                  <Badge className="border border-green-200 bg-green-100 text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>{' '}
                    Fulfilled
                  </Badge>
                ) : (
                  <Badge className="border border-red-200 bg-red-50 text-red-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>{' '}
                    Unfulfilled
                  </Badge>
                )}
              </TableCell>

              <TableCell className="flex items-center justify-center gap-2">
                <FileSpreadsheet className="h-4 w-4 cursor-pointer text-gray-500" />
                <BiMessageDetail className="h-4 w-4 cursor-pointer text-gray-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
