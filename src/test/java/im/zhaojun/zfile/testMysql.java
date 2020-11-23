package im.zhaojun.zfile;

import im.zhaojun.zfile.ZfileApplication;
import im.zhaojun.zfile.model.entity.SystemConfig;
import im.zhaojun.zfile.repository.SystemConfigRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

/**
 * @Created by LiuSy
 * @Date 2020/11/10 14:53
 * @Classname testMysql
 * @Description
 */


@RunWith(SpringRunner.class)
@SpringBootTest(classes = ZfileApplication.class)
public class testMysql {


    @Autowired
    private SystemConfigRepository systemConfigRepository;

    @Test
    public void save(){

        SystemConfig systemConfig = new SystemConfig();
        systemConfig.setKey("key");
        systemConfig.setValue("vale");
        systemConfig.setRemark("remark");
        SystemConfig save = systemConfigRepository.save(systemConfig);
        System.out.println(save);

    }
}
