import { Module } from '@nestjs/common';
import { TicketStatusService } from './ticket_status.service';
import { TicketStatusController } from './ticket_status.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketStatus, TicketStatusSchema } from './schemas/ticket_status.schema';

@Module({
  imports: [
        MongooseModule.forFeature([
          {
            name: TicketStatus.name,
            schema: TicketStatusSchema,
          },
        ]),
      ],
  controllers: [TicketStatusController],
  providers: [TicketStatusService],
})
export class TicketStatusModule {}
