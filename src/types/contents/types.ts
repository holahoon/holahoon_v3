export interface ResumeMetadata {
	title: string
	description: string
}

export interface Resume {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any
	meta: ResumeMetadata
}
