import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Machine, MachineSchema } from 'src/schemas/machine.schema';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
  ],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}
