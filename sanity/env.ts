export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-09-05'

export const dataset = assertValue(
  '577viqkj',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  'larrydean',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
