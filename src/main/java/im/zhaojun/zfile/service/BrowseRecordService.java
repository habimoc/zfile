package im.zhaojun.zfile.service;

import im.zhaojun.zfile.model.entity.BrowseRecord;
import im.zhaojun.zfile.repository.BrowseRecordRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Created by LiuSy
 * @Date 2020/11/25 14:40
 * @Classname BrowseRecordService
 * @Description
 */

@Slf4j
@Service
public class BrowseRecordService {
    @Resource
    BrowseRecordRepository browseRecordRepository;


    /**
     * 保存记录
     * @param browseRecord
     */
    public void saveBrowseRecord(BrowseRecord browseRecord){

        List<BrowseRecord> browseRecordList = browseRecordRepository.findByUserNameAndFilePathLikeAndStatus(browseRecord.getUserName(), browseRecord.getFilePath(),1,null);
        for (BrowseRecord record : browseRecordList) {
            if (record.getFileName().equals(browseRecord.getFileName())){
                return;
            }
            record.setStatus(0);
        }
        browseRecordRepository.saveAll(browseRecordList);
        BrowseRecord save = browseRecordRepository.save(browseRecord);
    }

    /**
     * 查询用户 记录
     * @param userName
     * @param filePath
     * @return
     */
    public List<BrowseRecord> findBrowseRecordByUser(String userName,String filePath,Integer status){
        List<BrowseRecord> browseRecordList = null;
        if (status ==null){
            browseRecordList= browseRecordRepository.findByUserNameAndFilePathLike(userName, "%" + filePath + "%", Sort.by("createTime").descending());
        }else {
            browseRecordList= browseRecordRepository.findByUserNameAndFilePathLikeAndStatus(userName, "%" + filePath + "%",status, Sort.by("createTime").descending());
        }
        return browseRecordList;
    }

}
