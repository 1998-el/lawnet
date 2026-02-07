import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ProjectModal.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number;
}

const ProjectModal = ({ isOpen, onClose, projectId }: ProjectModalProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  // Get the image URL based on project ID
  const getProjectImage = () => {
    const imageKey = `project.${projectId}.image`;
    return t(imageKey as any) || t('project.4.image' as any);
  };

  // Get project-specific content
  const getDetailTitle = () => {
    if (projectId === 5) {
      return t('project.5.detail.title');
    }
    return t('project.detail.title');
  };

  const getDetailIntro = () => {
    if (projectId === 5) {
      return t('project.5.detail.intro');
    }
    return t('project.detail.intro');
  };

  const getDetailContent = () => {
    if (projectId === 5) {
      return t('project.5.detail.content');
    }
    return t('project.detail.content');
  };

  const getDetailCTA = () => {
    if (projectId === 5) {
      return t('project.5.detail.cta');
    }
    return t('project.detail.cta');
  };

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-image">
          <img src={getProjectImage()} alt="Project" />
        </div>

        <div className="modal-content">
          <h2 className="modal-title">
            {getDetailTitle()}
          </h2>

          <p className="modal-intro">
            {getDetailIntro()}
          </p>

          <div className="modal-body">
            <p>{getDetailContent()}</p>
          </div>

          {/* Only show tips for project 4 */}
          {projectId !== 5 && (
            <div className="modal-tips">
              <h3>{t('project.detail.tips')}</h3>
              <ul>
                <li>{t('project.detail.tip1')}</li>
                <li>{t('project.detail.tip2')}</li>
                <li>{t('project.detail.tip3')}</li>
              </ul>
            </div>
          )}

          <div className="modal-cta">
            <p>{getDetailCTA()}</p>
          </div>

          {/* Only show join and hashtags for project 4 */}
          {projectId !== 5 && (
            <>
              <div className="modal-join">
                <p>{t('project.detail.join')}</p>
              </div>

              <div className="modal-hashtags">
                {t('project.detail.hashtags')}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
