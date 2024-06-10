import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma:PrismaService){}
  create(createNoteDto: CreateNoteDto) {
    try {
      const createNote=this.prisma.notes.create({ data:createNoteDto})

      return createNote;
    } catch (error) {
      console.log(error);
    }
  }

  //async can be added but i avoided adding async for now at least
  findAll() {
    return this.prisma.notes.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} note`;
    try {
      const findById=this.prisma.notes.findUnique({where:{id}})
      return findById
    } catch (error) {
      console.log(error)
    }
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    try{
    const updateNote=await this.prisma.notes.update({
      where:{id},
      data:updateNoteDto, 
     
    }
    
  
  )
  console.log('received:',id)
    //return `This action updates a #${id} note`
    return updateNote;
  }catch(error){
    console.error();
    
  }
  }

  // async pinNotes(id: number, updateNoteDto: UpdateNoteDto) {
  //   try {
  //     const updateData = { ...updateNoteDto, isPinned: true };
  //     const updatedNote = await this.prisma.notes.update({
  //       where: { id },
  //       data: updateData,
  //     });
  //     return updatedNote;
  //   } catch (error) {
  //     throw new ForbiddenException('Unable to pin the note');
  //   }
  // }


  async remove(id: number) {
    //return `This action removes a #${id} note`;

    try{
    const deleteNote=await this.prisma.notes.delete({
      where:{id}
    })
    return deleteNote;
  }
  catch(error){
    throw new ForbiddenException('unable to complete deletion')
  }
}}
