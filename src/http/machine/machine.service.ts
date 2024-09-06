import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine } from 'src/schemas/machine.schema';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachineService {
  constructor(
    @InjectModel(Machine.name) private machineModel: Model<Machine>,
  ) {}

  async create(createMachineDto: CreateMachineDto) {
    const payload = {
      patente: createMachineDto.patente,
      _model: createMachineDto._model,
      year: createMachineDto.year,
    };
    return await this.machineModel.create(payload);
  }

  async findAll() {
    return await this.machineModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} machine`;
  }

  update(id: number, updateMachineDto: UpdateMachineDto) {
    return `This action updates a #${id} machine`;
  }

  remove(id: number) {
    return `This action removes a #${id} machine`;
  }
}
