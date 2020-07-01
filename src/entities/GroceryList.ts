
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
import {item} from './item';
import { type } from 'os';
  
  @Entity('grocerie')
  export class GroceryList extends BaseEntity {

    @PrimaryGeneratedColumn('uuid') id: string;
  
    @Column({
      type: 'varchar',
      unique: true
    })
    name: string;
  
    @CreateDateColumn({
      type: 'timestamp'
    })
    created: string;
    @ManyToOne(type => item, {cascade : true})
    @JoinColumn()
    items:item[];

  }