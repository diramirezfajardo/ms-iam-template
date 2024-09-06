import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Machine extends Document {
  @Prop({ type: String, required: true, unique: true })
  patente?: string;

  @Prop({ type: String, required: true })
  _model?: string;

  @Prop({ type: String, required: true })
  year?: string;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);
