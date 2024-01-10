import { z } from 'zod'

export const ResumeMetadataSchema = z.object({
	title: z.string({ required_error: 'title is required' }),
	description: z.string({ required_error: 'description is required' }),
	date: z.string({ required_error: 'date is required in MM-DD-YYYY' }) // TODO: date format check
})
