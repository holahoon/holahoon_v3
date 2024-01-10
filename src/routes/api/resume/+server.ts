/**
 * NIU
 * May need if I need to iterate over multiple markdowns to create a list
 */
import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import type { ResumeMetadata, Resume } from '$types/contents/types'
import { ResumeMetadataSchema } from '$lib/utils/validation'

const getResumeMarkdown = async (): Promise<Resume> => {
	const modules = import.meta.glob('/src/contents/resume/*.md', { eager: true })
	const path = Object.keys(modules)[0]
	const file = modules[path]
	const splittedNames = path.split('/')
	const slug = splittedNames[splittedNames.length - 1].replace('.md', '')

	if (!file || typeof file !== 'object' || !slug || !('metadata' in file))
		error(422, 'check resume.md metadata')

	const metadata = file.metadata as ResumeMetadata

	const validity = ResumeMetadataSchema.safeParse(metadata)

	if (!validity.success) {
		const errorMessage = validity.error.issues.map((issue) => issue.message).join(', ')
		error(422, errorMessage)
	}

	return { metadata, slug } satisfies Resume
}

export const GET: RequestHandler = async () => {
	const resume = await getResumeMarkdown()
	return json(resume)
}
