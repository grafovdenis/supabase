export type VercelFramework =
  | (
      | 'blitzjs'
      | 'nextjs'
      | 'gatsby'
      | 'remix'
      | 'astro'
      | 'hexo'
      | 'eleventy'
      | 'docusaurus-2'
      | 'docusaurus'
      | 'preact'
      | 'solidstart'
      | 'dojo'
      | 'ember'
      | 'vue'
      | 'scully'
      | 'ionic-angular'
      | 'angular'
      | 'polymer'
      | 'svelte'
      | 'sveltekit'
      | 'sveltekit-1'
      | 'ionic-react'
      | 'create-react-app'
      | 'gridsome'
      | 'umijs'
      | 'sapper'
      | 'saber'
      | 'stencil'
      | 'nuxtjs'
      | 'redwoodjs'
      | 'hugo'
      | 'jekyll'
      | 'brunch'
      | 'middleman'
      | 'zola'
      | 'hydrogen'
      | 'vite'
      | 'vitepress'
      | 'vuepress'
      | 'parcel'
      | 'sanity'
      | 'storybook'
    )
  | null

export type VercelGitLink =
  | {
      /**
       * GitHub link
       */
      org?: string
      repo?: string
      repoId?: number
      type?: 'github'
      createdAt?: number
      deployHooks: {
        createdAt?: number
        id: string
        name: string
        ref: string
        url: string
      }[]
      gitCredentialId?: string
      updatedAt?: number
      sourceless?: boolean
      productionBranch?: string
    }
  | {
      /**
       * GitLab link
       */
      projectId?: string
      projectName?: string
      projectNameWithNamespace?: string
      projectNamespace?: string
      projectUrl?: string
      type?: 'gitlab'
      createdAt?: number
      deployHooks: {
        createdAt?: number
        id: string
        name: string
        ref: string
        url: string
      }[]
      gitCredentialId?: string
      updatedAt?: number
      sourceless?: boolean
      productionBranch?: string
    }
  | {
      /**
       * Bitbucket link
       */
      name?: string
      slug?: string
      owner?: string
      type?: 'bitbucket'
      uuid?: string
      workspaceUuid?: string
      createdAt?: number
      deployHooks: {
        createdAt?: number
        id: string
        name: string
        ref: string
        url: string
      }[]
      gitCredentialId?: string
      updatedAt?: number
      sourceless?: boolean
      productionBranch?: string
    }

export type Imetadata = {
  id: string
  supabaseConfig: {
    projectEnvVars: {
      write: boolean
    }
  }
  link?: VercelGitLink
  name: string
  framework: VercelFramework
}

export type IntegrationProjectConnection = {
  id: string
  inserted_at: string
  updated_at: string
  added_by: addedBy
  supabase_project_ref: string
  foreign_project_id: string
  organization_integration_id: string
  metadata: Imetadata
}

export type IntegrationsVariables = {
  orgSlug?: string
}

export type IntegrationProjectConnectionPayload = {
  foreignProjectId: string
  supabaseProjectId: string
  integrationId: string
  metadata: Imetadata
}

export type userDetails = {
  username: string
  id: string
  primary_email: string
}
type addedBy = userDetails
type updatedBy = userDetails

export type IntegrationName = 'Vercel' | 'Netlify' | 'GitHub'
export type VercelAcccountType = 'team' | 'personal'
export type VercelSource = 'marketplace' | 'deploy button'

export type Integration = {
  id: string
  integration: {
    name: IntegrationName
  }
  added_by: addedBy
  inserted_at: string
  updated_at: string
  connections: IntegrationProjectConnection[] | []
  organization: {
    slug: string
  }
  metadata?: {
    vercelTeam?: string
    gitHubConnectionOwner?: string
    account: {
      name: string
      type: VercelAcccountType
      avatar: string
      source: VercelSource
      owner_id: string
    }
    configuration_id: string
  }
}
