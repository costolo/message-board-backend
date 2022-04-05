import { Post } from './Post'
import { Comment } from './Comment'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstname!: string

  @Column()
  lastname!: string

  @Column()
  email!: string

  @OneToMany(_type => Post, ((post: Post) => post.user))
  posts!: Array<Post>

  @OneToMany(_type => Comment, ((comment: Comment) => comment.user))
  comments!: Array<Comment>

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}