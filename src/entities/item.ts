import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity('items')
export class item extends BaseEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type:"varchar"
    })
    name:string;

    @CreateDateColumn({
        type:"timestamp"
    })
    created:string;


    
}